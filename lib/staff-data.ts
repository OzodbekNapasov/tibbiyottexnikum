export type StaffMember = {
  id: string;
  name: string;
  position: string;
  department: string;
  image?: string;
  bio?: string;
  contact?: {
    phone?: string;
    email?: string;
  };
};

export const staffMembers: StaffMember[] = [
  {
    id: "1",
    name: "Dr. Abdullayev Alisher",
    position: "Rektor (Direkto)",
    department: "Bosh Etakligi",
    image: "/images/staff/rector.jpg",
    bio: "Tibbiyot sohasida 25+ yillik tajribali rahbar",
    contact: {
      phone: "+998 (36) 224-XX-XX",
      email: "rector@tibbiyot-texnikum.uz",
    },
  },
  {
    id: "2",
    name: "Sh. Rahimova Gulnara",
    position: "O'quv va Metodik Xizmalar Bo'limi Bosh",
    department: "O'quv Bo'limi",
    image: "/images/staff/academic-director.jpg",
    bio: "O'quv dasturlarining takomillantirishda faol qatnashuvchi",
    contact: {
      phone: "+998 (36) 224-XX-XX",
      email: "academic@tibbiyot-texnikum.uz",
    },
  },
  {
    id: "3",
    name: "Mirzoev Qobil",
    position: "Xazina Bosh",
    department: "Moliya Bo'limi",
    image: "/images/staff/finance-director.jpg",
    bio: "Moliyaviy boshqaruv bo'yicha mutaxassis",
    contact: {
      phone: "+998 (36) 224-XX-XX",
    },
  },
  {
    id: "4",
    name: "Dr. Xodjayeva Nozima",
    position: "Klinik Praktika Rahbari",
    department: "Amaliyot Bo'limi",
    image: "/images/staff/clinical-director.jpg",
    bio: "Tibbiyot amaliyotining tashkil etishda ustali",
    contact: {
      phone: "+998 (36) 224-XX-XX",
      email: "clinical@tibbiyot-texnikum.uz",
    },
  },
  {
    id: "5",
    name: "Karimova Dilbar",
    position: "Talabalari Bilan Ishlash Bo'limi Bosh",
    department: "Talaba Xizmatlari",
    image: "/images/staff/student-affairs.jpg",
    bio: "Talabalarning ta'lim va ijtimoiy faoliyatini ta'minlash",
    contact: {
      phone: "+998 (36) 224-XX-XX",
      email: "students@tibbiyot-texnikum.uz",
    },
  },
  {
    id: "6",
    name: "Nazarov Shukrullo",
    position: "Qabul Xizmati Rahbari",
    department: "Qabul Bo'limi",
    image: "/images/staff/admission.jpg",
    bio: "Abituriyentlarni qabul qilish jarayonini boshqaradi",
    contact: {
      phone: "+998 (36) 224-XX-XX",
      email: "admission@tibbiyot-texnikum.uz",
    },
  },
];
