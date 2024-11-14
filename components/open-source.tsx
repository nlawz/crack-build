"use client";
import { SectionTitle } from "@/components/section";
import { motion } from "framer-motion";
import { Github, Star } from "lucide-react";
import Link from "next/link";
import GithubSvg from "../images/unkey-github.svg";
import { PrimaryButton } from "./button-key";
import { ImageWithBlur } from "./image-with-blur";
import { OssChip } from "./svg/oss-chip";
import { OssLight } from "./svg/oss-light";
import { MeteorLines } from "@/components/ui/meteor-lines";

export const OpenSource: React.FC = () => {
  return (
      <div className="pt-[00px] flex items-center flex-col md:flex-row relative">
          <div className="absolute top-[-320px] md:top-[-480px] xl:right-[120px] -z-[10]">
              {/* TODO: horizontal scroll */}
              <OssLight className="scale-[2]" />
              <div className="absolute right-[270px] top-[250px] -z-50">
                  <MeteorLines
                      className="ml-2 fade-in-0"
                      delay={2}
                      number={1}
                  />
                  <MeteorLines
                      className="ml-10 fade-in-40"
                      number={1}
                      delay={0}
                  />
                  <MeteorLines
                      className="ml-16 fade-in-100"
                      delay={4}
                      number={1}
                  />
              </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full xl:flex-row xl:justify-between">
              <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.5 }}>
                  <SectionTitle
                      align="left"
                      title="open-source"
                      text="we have a nice collection of free to use templates to get up and started. coding no longer has to be a barrier to software creation."
                      label="oss/acc">
                      <div className="flex mt-10 space-x-6">
                          <Link
                              href="https://github.com/n0lawz"
                              className="group">
                              <PrimaryButton
                                  IconLeft={Github}
                                  label="GitHub"
                                  shiny
                              />
                          </Link>
                      </div>
                  </SectionTitle>
              </motion.div>
              <div className="relative">
                  <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1, ease: "easeInOut" }}>
                      <ImageWithBlur
                          alt="Github logo"
                          src={GithubSvg}
                          className="mt-24 rounded-[36px]"
                      />
                  </motion.div>
              </div>
          </div>
      </div>
  );
};
