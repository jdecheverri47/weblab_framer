"use client";

import { collection, addDoc } from "@firebase/firestore";
import db from "../../firebase";
import { useForm, FormProvider } from "react-hook-form";

function ContactSection() {
  const { register, handleSubmit, reset } = useForm();

  const sendMessage = async (data) => {
    const message = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      contact: data.contact,
      message: data.message,
    };
    try {
      const docRef = await addDoc(collection(db, "Messages"), message);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    reset();
  };
  return (
    <section className="pt-14 lg:pt-8">
      <div className="flex flex-col justify-center items-center px-5">
        <div className="flex flex-col justify-center items-start md:items-center h-full">
          <h3 className="gradient_bullet_text text-3xl font-bold">Contact</h3>
          <h2 className="text-5xl font-bold mt-2 lg:mt-5">Reach Out Today</h2>
          <p className="text-2xl text-center mt-2 lg:mt-4 max-w-3xl text-[#BFB1E3]">
            We&apos;re Just a Message Away
          </p>
        </div>

        <div className="md:w-[75vw] lg:w-[60vw] h-full bg-[#1c162c] rounded-[16px] contact_card mt-10">
          <div className="w-full h-full overflow-hidden lg:grid lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-start items-start md:items-center lg:items-start bg-[#fafafa] md:w-full lg:h-[92%] lg:w-[90%] lg:rounded-[16px] bg_contact px-4 py-5 rounded-t-[16px] md:py-20">
                <h2 className="text-5xl font-bold lg:mt-10 lg:ml-5">
                  Let&apos;s Work Together
                </h2>
              </div>
            </div>
            <div className="py-2">
              <form
                className="flex flex-col justify-center items-center h-full"
                onSubmit={handleSubmit(sendMessage)}
              >
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className="input_contact mt-5"
                />
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className="input_contact"
                />
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone"
                  className="input_contact"
                />
                <select
                  {...register("contact")}
                  className="input_contact text-gray-400"
                  defaultValue="default"
                >
                  <option value="default" disabled>
                    How do you want to get contact?
                  </option>
                  <option value="whatsapp">Whatsapp</option>
                  <option value="email">Email</option>
                  <option value="call">Call</option>
                </select>

                <textarea
                  {...register("message")}
                  placeholder="Message"
                  className="w-[80%] h-[12rem] rounded-[16px] bg-[#2a203b] text-lg px-4 mt-2 transition-all duration-300 ease-in-out focus:outline-[#0e0a18] "
                />
                <button
                  type="submit"
                  className="w-[80%] h-[3rem] rounded-[16px] bg-[#2a203b] text-white text-lg px-4 mt-4 transition-all duration-300 ease-in-out focus:outline-[#0e0a18] mb-5 hover:text-opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
