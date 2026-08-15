import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registrationSchema = z.object({
  fullName: z
    .string()
    .min(3, "Escribe tu nombre completo"),

  email: z
    .string()
    .email("Escribe un correo electrónico válido"),

  platform: z.enum(["pc", "playstation", "xbox"]),

  privacy: z
    .boolean()
    .refine((value) => value, {
      message: "Debes aceptar la política de privacidad",
    }),
});

type RegistrationData = z.infer<typeof registrationSchema>;

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),

    defaultValues: {
      fullName: "",
      email: "",
      platform: undefined,
      privacy: false,
    },
  });

  const onSubmit = (data: RegistrationData) => {
    console.log("Datos válidos:", data);

    setSubmitted(true);
    reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="preregistro"
      className="overflow-hidden bg-black px-4 py-20 text-white sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl min-w-0 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">

        {/* TEXTO */}
        <div className="min-w-0 flex flex-col justify-center">
          <p className="mb-3 break-words text-xs font-bold tracking-[0.3em] text-green-400 sm:text-sm sm:tracking-[0.4em]">
            ÚNETE AL VACÍO
          </p>

          <h2 className="break-words text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
            PRERREGISTRO
          </h2>

          <p className="mt-5 max-w-xl break-words text-sm leading-7 text-zinc-400 sm:text-base">
            Regístrate para recibir noticias, recompensas exclusivas
            y acceso a futuras pruebas de Void Ascendant.
          </p>

          <div className="mt-8 max-w-xl border-l-2 border-green-400 pl-4 sm:pl-5">
            <p className="break-words text-sm leading-6 text-zinc-400">
              Tu registro ayudará a desbloquear recompensas globales
              para toda la comunidad.
            </p>
          </div>
        </div>

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="min-w-0 w-full max-w-full rounded-2xl border border-white/10 bg-zinc-950 p-5 sm:p-8"
        >
          <div className="min-w-0">
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-bold"
            >
              NOMBRE COMPLETO
            </label>

            <input
              id="fullName"
              type="text"
              placeholder="Andrés Rodríguez"
              {...register("fullName")}
              className="block w-full min-w-0 max-w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-green-400"
            />

            {errors.fullName && (
              <p className="mt-2 break-words text-sm text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="mt-6 min-w-0">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold"
            >
              CORREO ELECTRÓNICO
            </label>

            <input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              {...register("email")}
              className="block w-full min-w-0 max-w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-green-400"
            />

            {errors.email && (
              <p className="mt-2 break-words text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mt-6 min-w-0">
            <label
              htmlFor="platform"
              className="mb-2 block text-sm font-bold"
            >
              PLATAFORMA
            </label>

            <select
              id="platform"
              {...register("platform")}
              className="block w-full min-w-0 max-w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-green-400"
            >
              <option value="">
                Selecciona una plataforma
              </option>

              <option value="pc">
                PC
              </option>

              <option value="playstation">
                PlayStation
              </option>

              <option value="xbox">
                Xbox
              </option>
            </select>

            {errors.platform && (
              <p className="mt-2 text-sm text-red-400">
                Selecciona una plataforma
              </p>
            )}
          </div>

          <div className="mt-6 min-w-0">
            <label className="flex min-w-0 items-start gap-3 text-sm text-zinc-400">
              <input
                type="checkbox"
                {...register("privacy")}
                className="mt-1 h-4 w-4 shrink-0 accent-green-400"
              />

              <span className="min-w-0 break-words">
                Acepto la política de privacidad y el tratamiento
                de mis datos para completar el prerregistro.
              </span>
            </label>

            {errors.privacy && (
              <p className="mt-2 break-words text-sm text-red-400">
                {errors.privacy.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full max-w-full rounded-lg bg-green-400 px-4 py-4 text-sm font-black text-black transition hover:bg-green-300 sm:px-6 sm:text-base"
          >
            COMPLETAR PRERREGISTRO
          </button>

          {submitted && (
            <div className="mt-6 break-words rounded-lg border border-green-400/30 bg-green-400/10 p-4 text-center text-sm font-bold text-green-400">
              PRERREGISTRO COMPLETADO CORRECTAMENTE
            </div>
          )}
        </form>

      </div>
    </section>
  );
}