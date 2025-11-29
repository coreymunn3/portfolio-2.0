import { client } from "@/sanity/lib/client";
import { PROFILE_QUERY, WORK_EXPERIENCE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function About() {
  let profile = null;
  let workExperience = [];

  try {
    profile = await client.fetch(PROFILE_QUERY);
    workExperience = await client.fetch(WORK_EXPERIENCE_QUERY);
  } catch (error) {
    console.warn("Sanity fetch failed:", error);
  }

  if (!profile) return null;

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900 ring-1 ring-gray-900/5">
              {profile.image && (
                <Image
                  src={urlFor(profile.image).width(800).height(800).url()}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>

          {/* Bio & Experience */}
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
              About Me
            </h2>
            <div className="prose prose-invert max-w-none mb-8 text-gray-300">
              <p>{profile.bio}</p>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">
              Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((job: any) => (
                <div
                  key={job._id}
                  className="border-l-2 border-gray-700 pl-4 hover:border-primary transition-colors"
                >
                  <h4 className="text-lg font-medium text-white">{job.role}</h4>
                  <p className="text-primary">{job.company}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(job.startDate).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                    })}{" "}
                    -
                    {job.endDate
                      ? new Date(job.endDate).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                        })
                      : " Present"}
                  </p>
                  <p className="text-gray-400 text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
