"use client";

import { useState } from "react";

/**
 * TEMPORARY gallery page to preview all photos.
 * Visit http://localhost:3000/gallery to see all photos with numbered labels.
 * DELETE this page before deploying!
 */

function extractDate(filename: string): string {
  // IMG_YYYYMMDD_... or IMG-YYYYMMDD-...
  let m = filename.match(/IMG[_-](\d{8})[_-]/);
  if (m) return m[1];

  // PXL_YYYYMMDD_...
  m = filename.match(/PXL_(\d{8})_/);
  if (m) return m[1];

  // Screenshot_YYYYMMDD_ or Screenshot_YYYYMMDD-
  m = filename.match(/Screenshot_(\d{8})[_-]/);
  if (m) return m[1];

  // Screenshot-YYYY-MM-DD-at-...
  m = filename.match(/Screenshot-(\d{4})-(\d{2})-(\d{2})-at/);
  if (m) return `${m[1]}${m[2]}${m[3]}`;

  // WhatsApp-Image-YYYY-MM-DD-at-...
  m = filename.match(/WhatsApp-Image-(\d{4})-(\d{2})-(\d{2})-at/);
  if (m) return `${m[1]}${m[2]}${m[3]}`;

  return "99999999"; // unknown dates go last
}

const unsortedPhotos = [
  "IMG_20251025_125557.jpg",
  "IMG_20251105_184057.jpg",
  "IMG_20251105_190853.jpg",
  "IMG_20251206_021738_765.jpg",
  "IMG_20260206_214217442.jpg",
  "IMG_20260207_012913741.jpg",
  "IMG_20260207_021416077.jpg",
  "IMG_20260207_022053759.jpg",
  "IMG_20260207_044641250.jpg",
  "IMG_20260207_094625325.jpg",
  "IMG_20260214_174656_944.jpg",
  "IMG_20260214_174804_402.jpg",
  "IMG_20260214_174930_888.jpg",
  "IMG_20260214_175010_540.jpg",
  "IMG_20260214_175351_134.jpg",
  "IMG_20260214_175409_811.jpg",
  "IMG_20260214_175659_881.jpg",
  "IMG_20260214_175759_154.jpg",
  "IMG_20260214_180507_535.jpg",
  "IMG-20250919-WA0073.jpg",
  "IMG-20250919-WA0104.jpg",
  "IMG-20251205-WA0057.jpg",
  "IMG-20251207-WA0030.jpg",
  "IMG-20251207-WA0032.jpg",
  "IMG-20251207-WA0038.jpg",
  "IMG-20251209-WA0029.jpg",
  "IMG-20251214-WA0294.jpg",
  "IMG-20251214-WA0320.jpg",
  "IMG-20251217-WA0019.jpg",
  "IMG-20251220-WA0334.jpg",
  "IMG-20251221-WA0003.jpg",
  "IMG-20251222-WA0000.jpg",
  "IMG-20251225-WA0025.jpg",
  "IMG-20260118-WA0020.jpg",
  "IMG-20260130-WA0072.jpg",
  "IMG-20260130-WA0073.jpg",
  "IMG-20260201-WA0045.jpg",
  "IMG-20260202-WA0023.jpg",
  "IMG-20260206-WA0025.jpg",
  "IMG-20260214-WA0039.jpg",
  "PXL_20251014_031230955.RAW-01.COVER.jpg",
  "PXL_20251014_031906724.RAW-01.COVER.jpg",
  "PXL_20251014_042118577.RAW-01.COVER.jpg",
  "PXL_20251210_143837485.jpg",
  "PXL_20251210_154708537.jpg",
  "PXL_20251212_153630075.jpg",
  "PXL_20251212_164427686.jpg",
  "PXL_20251212_165455179.jpg",
  "PXL_20251214_082937142.jpg",
  "PXL_20251214_083529700.jpg",
  "PXL_20251214_084035516.jpg",
  "PXL_20251215_181247076.jpg",
  "PXL_20251225_054318007.NIGHT.jpg",
  "PXL_20260101_195304629.jpg",
  "PXL_20260107_162250085.jpg",
  "PXL_20260112_191529418.jpg",
  "PXL_20260112_191541518.jpg",
  "PXL_20260131_130229959.jpg",
  "PXL_20260202_182939157.jpg",
  "PXL_20260206_195419085.jpg",
  "PXL_20260206_195419630.jpg",
  "PXL_20260206_222016314.jpg",
  "PXL_20260208_101013329.jpg",
  "PXL_20260211_062653848.jpg",
  "PXL_20260211_210837756.jpg",
  "Screenshot-2025-12-22-at-2.23.12-AM.png",
  "Screenshot-2025-12-26-at-1.57.59-AM.png",
  "Screenshot-2025-12-31-at-3.20.48-AM.png",
  "Screenshot-2025-12-31-at-3.42.46-AM.png",
  "Screenshot-2025-12-31-at-4.24.03-AM.png",
  "Screenshot-2026-01-03-at-3.20.06-AM.png",
  "Screenshot_20251029_015523.jpg",
  "Screenshot_20251029-013842.png",
  "Screenshot_20251120-010431.png",
  "Screenshot_20260124-111209.png",
  "Screenshot_20260207-154936.png",
  "Screenshot_20260214-180357.png",
  "WhatsApp-Image-2025-09-19-at-05.32.41-2.jpeg",
  "WhatsApp-Image-2025-09-20-at-17.27.08-1.jpeg",
  "WhatsApp-Image-2025-09-20-at-17.27.15-1.jpeg",
  "WhatsApp-Image-2025-09-20-at-17.27.15.jpeg",
  "WhatsApp-Image-2025-09-20-at-17.27.25-1.jpeg",
];

const photos = unsortedPhotos.slice().sort((a, b) => extractDate(a).localeCompare(extractDate(b)));

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
        Photo Gallery — Pick photos for each card
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Click a photo to see it full size. Note the <strong>#number</strong> to tell me which photos go where.
      </p>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <img
            src={`/photos/${selected}`}
            alt={selected}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <p className="absolute bottom-6 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selected} — Click anywhere to close
          </p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {photos.map((filename, i) => (
          <div
            key={filename}
            className="relative cursor-pointer group"
            onClick={() => setSelected(filename)}
          >
            <div className="aspect-square overflow-hidden rounded-xl border-2 border-gray-200 hover:border-pink-400 transition-colors">
              <img
                src={`/photos/${filename}`}
                alt={filename}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            {/* Number badge */}
            <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow">
              {i + 1}
            </div>
            {/* Date + Filename */}
            <p className="mt-1 text-[10px] text-gray-500 font-semibold px-1">
              #{i + 1} — {extractDate(filename).replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")}
            </p>
            <p className="text-[9px] text-gray-400 truncate px-1">
              {filename}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
