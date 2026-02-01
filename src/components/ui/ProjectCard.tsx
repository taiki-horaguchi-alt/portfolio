"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  imageUrl,
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href={href} className="block group">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl bg-white border border-navy-100 shadow-sm",
            "transition-all duration-500 ease-out",
            "hover:shadow-2xl hover:shadow-navy-900/10 hover:-translate-y-2",
            "hover:border-fresh-500/50",
            className
          )}
        >
          {/* Image Area */}
          <div className="relative h-48 bg-gradient-to-br from-navy-50 to-fresh-50 overflow-hidden">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-200 to-fresh-200 animate-pulse" />
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Arrow Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-navy-900" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-fresh-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-navy-600 text-sm leading-relaxed mb-4 line-clamp-2">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-navy-50 text-navy-600 border border-navy-100 group-hover:bg-fresh-50 group-hover:text-fresh-700 group-hover:border-fresh-200 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
