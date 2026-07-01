"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [state, handleSubmit] = useForm("xgojlpjq");
  return (
    <section
      id="contact"
      className="h-screen"
    >
      <Container>

        <SectionTitle
          badge="CONTACT"
          title="Let's Build Together"
          description="Have an idea or want to collaborate? We'd love to hear from you."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-20"
        >

          <GlassCard className="p-10">
            <form onSubmit={handleSubmit}>

            <div className="grid gap-10 lg:grid-cols-2">

              {/* Left */}

              <div>

                <h3 className="text-3xl font-bold text-white">

                  Start a Conversation

                </h3>

                <p className="mt-6 leading-8 text-zinc-400">

                  Whether you're looking for AI solutions,
                  software development, cybersecurity or
                  innovative digital products, ANOX is ready
                  to help build the future.

                </p>

                <div className="mt-10 space-y-5">

                  <div>

                    <p className="text-zinc-500 text-sm">

                      Email

                    </p>

                    <p className="mt-1 text-lg text-white">

                      anoxdev@gmail.com

                    </p>

                  </div>

                  <div>

                    <p className="text-zinc-500 text-sm">

                      Location

                    </p>

                    <p className="mt-1 text-lg text-white">

                      Global • Remote First

                    </p>

                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="space-y-5">

                <input
                  
  name="name"
  type="text"
  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition focus:border-cyan-400"
                />

                <input
  name="email"
  type="email"
  placeholder="Email Address"
  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition focus:border-cyan-400"
                />
<ValidationError
prefix="Email"
field="email"
errors={state.errors}
/>

                <textarea
  name="message"
  required
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition focus:border-cyan-400"
                />
<ValidationError
prefix="Message"
field="message"
errors={state.errors}
/>
                <Button
type="submit"
className="w-full"
disabled={state.submitting}
>
{state.submitting ? "Sending..." : "Send Message"}
</Button>
{state.succeeded && (

<p className="mt-6 text-green-400">

✅ Message sent successfully.

</p>

)}
                              </div>

            </div>
            </form>

          </GlassCard>

        </motion.div>

        {/* Bottom Glow */}

        <div
          className="
            pointer-events-none

            absolute

            left-1/2

            bottom-0

            h-[450px]

            w-[450px]

            -translate-x-1/2

            rounded-full

            bg-cyan-400/10

            blur-[150px]
          "
        />

      </Container>

    </section>
  );
}
