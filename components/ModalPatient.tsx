import ModalGeneral from "./common/Modal";
import Input from "./common/Input";
import { Patient } from "@/types";
import { Dispatch, SetStateAction, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { ToastContext } from "@/context/ToastContext";
import { initialPatient } from "@/constants/InitialPatient";

type Props = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  setPatients: Dispatch<SetStateAction<Patient[]>>;
  setCurrentPatient: Dispatch<SetStateAction<Patient>>;
  editing: boolean;
};

const ModalPatient = ({
  openModal,
  setOpenModal,
  setPatients,
  setCurrentPatient,
  editing,
}: Props) => {
  const { showSuccessMessage } = useContext(ToastContext);

  const { register, reset, handleSubmit, formState } = useFormContext();

  const addPatient = (data: any) => {
    if (editing) {
      setPatients((prev: Patient[]) => {
        return prev.map((patient) =>
          patient.id === data.id ? { ...patient, ...data } : patient
        );
      });
    } else {
      setPatients((prev: Patient[]) => {
        return [
          ...prev,
          {
            ...data,
            id: String(prev.length + 1),
            createdAt: new Date().toISOString(),
          },
        ];
      });
    }
    showSuccessMessage(
      `Paciente ${editing ? "editado" : "agregado"} con éxito`
    );
    setOpenModal(false);

    setTimeout(() => {
      setCurrentPatient(initialPatient);
      reset();
    }, 500);
  };

  const handleCancel = () => {
    setOpenModal(false);
    setTimeout(() => setCurrentPatient(initialPatient), 500);
  };

  return (
    <div>
      <ModalGeneral
        onCancel={handleCancel}
        onConfirm={handleSubmit((data) => addPatient(data))}
        visible={openModal}
        title={editing ? "Editar paciente" : "Agregar paciente"}
        ctaText="Guardar"
        canSend={formState.isValid}
      >
        <>
          <Input
            label="Nombre"
            placeholder="Ej: Juan Pérez"
            register={register("name")}
            required
          />
          <Input
            As="textarea"
            label="Descripción"
            placeholder="Ej: Descripción del paciente"
            register={register("description")}
            required
          />
          <Input
            label="Sitio web"
            placeholder="Ej: https://www.ejemplo.com"
            register={register("website")}
            required
            helperText="Debe ser una URL válida"
          />
          <Input
            label="Avatar"
            placeholder="Ej: https://www.dominio.com/avatar.jpg"
            register={register("avatar")}
            required
            helperText="Debe ser una URL válida"
          />
        </>
      </ModalGeneral>
    </div>
  );
};

export default ModalPatient;
