import React from 'react';

const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded-2xl ${className}`}></div>
);

export const HomeSkeleton = () => {
  return (
    <div className="font-cairo overflow-x-hidden">
      {/* Hero Skeleton */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gray-100">
        <div className="relative z-10 text-right w-full max-w-7xl mx-auto px-4">
          <div className="max-w-2xl bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            <Skeleton className="w-40 h-6 mb-4 rounded-full" />
            <Skeleton className="w-full h-16 md:h-24 mb-6" />
            <Skeleton className="w-3/4 h-8 mb-10" />
            <div className="flex gap-4">
                <Skeleton className="w-40 h-16 rounded-2xl" />
                <Skeleton className="w-40 h-16 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
                <div className="w-64">
                    <Skeleton className="w-32 h-4 mb-2" />
                    <Skeleton className="w-full h-10" />
                </div>
                <div className="flex gap-2">
                    <Skeleton className="w-12 h-12 rounded-full" />
                    <Skeleton className="w-12 h-12 rounded-full" />
                </div>
            </div>
            <div className="flex gap-6 overflow-hidden">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="min-w-[300px] md:min-w-[380px] bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col">
                        <Skeleton className="h-48 w-full" />
                        <div className="p-6">
                            <Skeleton className="w-3/4 h-6 mb-3" />
                            <Skeleton className="w-full h-4 mb-2" />
                            <Skeleton className="w-1/2 h-4" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Packages Skeleton */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-right mb-12">
                <Skeleton className="w-32 h-4 mb-2 mr-0 ml-auto" />
                <Skeleton className="w-64 h-10 mr-0 ml-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden">
                        <Skeleton className="h-72 w-full" />
                        <div className="p-8">
                            <Skeleton className="w-full h-6 mb-4" />
                            <Skeleton className="w-4/5 h-4 mb-8" />
                            <div className="flex justify-between items-center pt-6 border-t">
                                <Skeleton className="w-24 h-8" />
                                <Skeleton className="w-32 h-12 rounded-xl" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Skeleton;
