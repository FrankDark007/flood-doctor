import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { ProblemSolution } from './types';

interface ServiceProblemSolutionProps {
  data: ProblemSolution;
}

const ServiceProblemSolution: React.FC<ServiceProblemSolutionProps> = ({ data }) => {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Problem Column */}
          <div className="relative bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 p-2.5 rounded-xl text-accent">
                <AlertTriangle size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{data.problem.title}</h2>
            </div>
            
            <ul className="space-y-4">
              {data.problem.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* Solution Column */}
          <div className="relative bg-primary-light/40 rounded-3xl p-8 md:p-10 border border-blue-100 shadow-sm ring-1 ring-blue-500/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-blue-100 px-4 py-1 rounded-full text-sm font-semibold text-primary shadow-sm md:hidden">
              VS
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-2.5 rounded-xl text-white shadow-md shadow-blue-500/20">
                <CheckCircle2 size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{data.solution.title}</h2>
            </div>
            
            <ul className="space-y-4">
              {data.solution.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="mt-1 text-primary shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProblemSolution;