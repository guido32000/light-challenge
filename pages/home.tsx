import Button from "@/components/common/Button";
import DrawerPatient from "@/components/DrawerPatient";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PatientCard from "@/components/PatientCard";
import usePatientList from "@/hooks/usePatientList";
import { Patient } from "@/types";
import { useEffect, useState } from "react";
import ModalPatient from "@/components/ModalPatient";
import { initialPatient } from "@/constants/InitialPatient";
import Spinner from "@/components/common/Spinner";

const Home = () => {
  const { patientList, isLoading } = usePatientList();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentPatient, setCurrentPatient] = useState<Patient>(initialPatient);
  const [patients, setPatients] = useState<Patient[]>([]);

  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    website: yup.string().url().required(),
    avatar: yup.string().url().required(),
  });

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleClickDrawer = (patient: Patient) => {
    setCurrentPatient(patient);
    setOpenDrawer(true);
  };

  const handleEditPatient = (patient: Patient) => {
    setCurrentPatient(patient);
    setOpenModal(true);
  };

  useEffect(() => {
    if (patientList && patientList.length > 0) {
      setPatients(patientList);
    }
  }, [patientList]);

  useEffect(() => {
    if (currentPatient) {
      methods.reset(currentPatient);
    }
  }, [currentPatient]);

  return (
    <div className="p-8">
      <FormProvider {...methods}>
        <ModalPatient
          openModal={openModal}
          setOpenModal={setOpenModal}
          setPatients={setPatients}
          setCurrentPatient={setCurrentPatient}
          editing={!!currentPatient.id}
        />
      </FormProvider>

      <DrawerPatient
        visible={openDrawer}
        setOpenDrawer={setOpenDrawer}
        patient={currentPatient}
      />
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold text-left py-4 tracking-wider">
          Lista de pacientes
        </div>
        <Button text="Agregar paciente" onClick={() => setOpenModal(true)} />
      </div>
      {isLoading && <Spinner />}
      <div className="grid grid-cols-3 gap-4">
        {patients.map((p: Patient) => (
          <PatientCard
            key={p.id}
            patient={p}
            handleClickDrawer={() => handleClickDrawer(p)}
            handleClickModal={() => handleEditPatient(p)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
