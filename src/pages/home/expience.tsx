import { Calendar, CheckCircle2, Clock } from 'lucide-react';
import getExpiriences from '../api/experiences';
import { Card, CardContent } from '@/components/ui/card';

export default function Experiences() {
  const experiences = getExpiriences();

  return (
    <div className="min-h-screen bg-gray-950 p-8" id='experience'>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">Experiência</h1>

        <div className="relative mt-11">
          <div className="absolute transform md:left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-cyan-500 to-cyan-100" />

          <div className="space-y-4">
            {experiences.map((p, index) => (
              <div key={index} className="relative">
                <div className={`flex items-center gap-8 ${index % 2 == 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}>
                  <div className={`w-11/12 md:w-5/12 text-left md:text-rigth`}>
                    <Card className="bg-white shadow-lg hover:shadow-xl hover:scale-[1.05] transition-all">
                      <CardContent className="p-6">
                        <div className='flex flex-row justify-between items-center'>
                          <h1 className="font-bold text-gray-800 mb-2 text-lg">{p.titulo}</h1>

                          <div className={`flex items-center gap-2 mb-3 justify-end`}>
                            <div className={`p-2 rounded-lg ${p.status === 'finalizado' ? 'bg-yellow-100' : 'bg-green-100'}`}>
                              {p.status === 'finalizado' ? <CheckCircle2 className="w-5 h-5 text-yellow-600" /> : <Clock className="w-5 h-5 text-green-600" />}
                            </div>
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full
                              ${p.status === 'finalizado' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                              {p.status === 'finalizado' ? 'Finalizado' : 'Presente'}
                            </span>
                          </div>                          
                        </div>
                        <p className="text-gray-600 text-sm text-justify mb-3">{p.descricao}</p>
                        
                        <div className={`flex flex-wrap gap-1 justify-start`}>
                          {p.linguagens.map((l, index) => {
                            return (
                              <img
                                key={'linguagens-' + index}
                                alt='linguagens'
                                src={l.url}
                                width={35}
                                height={35}
                                className={l.bg}
                              />
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={`hidden md:block w-11 h-3 rounded-full border-white shadow-lg items-center justify-center
                    bg-gradient-to-bl from-blue-400 via-cyan-500 to-cyan-50`}>
                  </div>

                  <div className={`rounded-full border-white shadow-lg flex items-center justify-center gap-2 mb-3 md:mb-0`}>
                    <Calendar className='text-white' />
                    <p className='text-white'>{p.ano_inicial == p.ano_final ? p.ano_inicial : `${p.ano_inicial} - ${p.ano_final}`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}