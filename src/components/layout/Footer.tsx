import { COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white" aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CA Office */}
          <div>
            <p className="text-gray-300 text-sm mb-1">9890 Research Dr. Suite 100</p>
            <p className="text-gray-300 text-sm mb-1">Irvine, CA 92618</p>
            <p className="text-gray-300 text-sm">
              {COMPANY_INFO.phone} | {COMPANY_INFO.email}
            </p>
          </div>

          {/* VN Office */}
          <div>
            <p className="text-gray-300 text-sm mb-1">Floor 3 - 65 Tran Nao, An Khanh Ward, Thu</p>
            <p className="text-gray-300 text-sm mb-1">Duc City, HCMC</p>
            <p className="text-gray-300 text-sm">Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
