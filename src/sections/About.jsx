
import { Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-teal-100 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
  src="/public/assets/yeny.jpg" 
  alt="Terapeuta Yeny" 
  className="w-full max-w-[350px] h-auto rounded-2xl shadow-xl object-cover mx-auto" 
/>
          </div>

          
          <div className="w-full md:w-1/2">
            <span className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-2 block">
              Conóceme
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">
  Hola, soy Yeny
</h2>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Soy profesional certificada en <strong>Masoterapia</strong>, apasionada por el bienestar y la salud integral. Mi objetivo es brindarte un espacio seguro donde puedas desconectar del mundo.
              </p>
              <p>
                Me he especializado en técnicas de <strong>piedras calientes</strong> para ofrecerte una relajación profunda que ayuda al cuerpo a sanar de manera natural.
              </p>
            </div>
            
            <div className="mt-8 flex gap-6">
              <div className="flex flex-col items-center p-4 bg-stone-50 rounded-xl flex-1 text-center">
                <span className="text-3xl font-serif text-teal-600 mb-1">100%</span>
                <span className="text-xs text-stone-500 uppercase tracking-tighter">Atención Personalizada</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-stone-50 rounded-xl flex-1 text-center">
                <Sparkles className="h-8 w-8 text-teal-600 mb-2"/>
                <span className="text-xs text-stone-500 uppercase tracking-tighter">Productos Naturales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;