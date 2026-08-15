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
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-bold tracking-[0.4em] text-green-400">
            ÚNETE AL VACÍO
          </p>

          <h2 className="text-4xl font-black sm:text-6xl">
            PRERREGISTRO
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-zinc-400">
            Regístrate para recibir noticias, recompensas exclusivas
            y acceso a futuras pruebas de Void Ascendant.
          </p>

          <div className="mt-8 border-l-2 border-green-400 pl-5">
            <p className="text-sm leading-6 text-zinc-400">
              Tu registro ayudará a desbloquear recompensas globales
              para toda la comunidad.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="rounded-2xl border border-white/10 bg-zinc-950 p-8"
        >

          <div>
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
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-green-400"
            />

            {errors.fullName && (
              <p className="mt-2 text-sm text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="mt-6">
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
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-green-400"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label
              htmlFor="platform"
              className="mb-2 block text-sm font-bold"
            >
              PLATAFORMA
            </label>

            <select
              id="platform"
              defaultValue=""
              {...register("platform")}
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-green-400"
            >
              <option value="" disabled>
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

          <div className="mt-6">
            <label className="flex items-start gap-3 text-sm text-zinc-400">
              <input
                type="checkbox"
                {...register("privacy")}
                className="mt-1 h-4 w-4 accent-green-400"
              />

              <span>
                Acepto la política de privacidad y el tratamiento
                de mis datos para completar el prerregistro.
              </span>
            </label>

            {errors.privacy && (
              <p className="mt-2 text-sm text-red-400">
                {errors.privacy.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-lg bg-green-400 px-6 py-4 font-black text-black transition hover:bg-green-300"
          >
            COMPLETAR PRERREGISTRO
          </button>

          {submitted && (
            <div className="mt-6 rounded-lg border border-green-400/30 bg-green-400/10 p-4 text-center text-sm font-bold text-green-400">
              PRERREGISTRO COMPLETADO CORRECTAMENTE
            </div>
          )}

        </form>

      </div>
    </section>
  );
}