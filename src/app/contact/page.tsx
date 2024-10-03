"use client";
import { Meteors } from "@/components/ui/meteors";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contact from "../assets/3dContact.png";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="h-screen w-screen relative bg-gray-900">
<div className="h-screen w-full flex  flex-col justify-center items-center">

<h2 className="text-4xl font-bold  underline mb-6 text-center">Contact Us</h2>

        <div className="h-fit flex  gap-5  justify-center items-center">
          <div>
            <form className="h-fit w-full flex flex-col gap-5">
              <div className="flex gap-5">
                <div>
                  <label id="name" className="sr-only">
                    Name
                  </label>
                  <Input placeholder="Name" id="name" autoComplete="name" />
                </div>
                <div>
                  <label id="email" className="sr-only">
                    Email
                  </label>
                  <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="w-full">
                <label id="subject" className="sr-only">
                  Subject
                </label>
                <Input placeholder="Subject" id="subject" />
              </div>
              <div className="w-full">
                <label id="message" className="sr-only">
                  Message
                </label>
                <Textarea placeholder="Massage" id="message" rows={5}/>
              </div>

              <div className="text-center">
                <button className="shadow-[inset_0_0_0_2px_#616467] text-gray-300 px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <Image src={contact} alt="contact Image" />
          </div>
        </div>
        </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
};

export default page;
