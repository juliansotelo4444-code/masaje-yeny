import { Sparkles, Droplets, Leaf } from 'lucide-react';

export const servicios = [
  {
    id: 1,
    titulo: "Piedras Calientes",
    descripcion: "Terapia termal de relajación profunda. El calor de las piedras basálticas alivia tensiones crónicas y equilibra la energía.",
    imagen: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    icono: Sparkles,
    especialidad: true
  },
  {
    id: 2,
    titulo: "Masaje Descontracturante",
    descripcion: "Tratamiento intenso diseñado para disolver nódulos de tensión. Ideal para dolor de espalda, cuello o sobrecarga postural.",
    imagen: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
    icono: Droplets,
    especialidad: false
  },
  {
    id: 3,
    titulo: "Masaje Relajante",
    descripcion: "Movimientos suaves y fluidos que promueven la relajación general. Perfecto para desconectar y combatir el estrés diario.",
    imagen: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
    icono: Leaf,
    especialidad: false
  }
];