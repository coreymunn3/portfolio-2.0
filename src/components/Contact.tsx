"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { PROFILE_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default function Contact() {
  const [profile, setProfile] = useState<any>(null);

  // fetch the profile data from Sanity
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await client.fetch(PROFILE_QUERY);
        setProfile(profileData);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Let's Work Together
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects and open to full-time
            opportunities. If you have a project that needs some creative touch,
            I'd love to hear about it.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            {profile && (
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <Mail className="w-5 h-5" />
                <span>{profile.email}</span>
              </a>
            )}
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Remote / Washington, DC</span>
            </div>
          </div>

          {profile && (
            <a
              href={`mailto:${profile.email}`}
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Say Hello
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
