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

export const TransportationSkeleton = () => {
  return (
    <div className="font-cairo">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="w-64 h-10 mx-auto mb-4" />
            <Skeleton className="w-48 h-4 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                <Skeleton className="h-64 w-full" />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <Skeleton className="w-1/2 h-6" />
                    <Skeleton className="w-20 h-4 rounded-full" />
                  </div>
                  <div className="flex gap-6 mb-8">
                    <Skeleton className="w-16 h-4" />
                    <Skeleton className="w-16 h-4" />
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <div className="space-y-2">
                        <Skeleton className="w-12 h-3" />
                        <Skeleton className="w-20 h-6" />
                    </div>
                    <Skeleton className="w-32 h-10 rounded-xl" />
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

export const PackageDetailSkeleton = () => {
  return (
    <div className="bg-[#f8f9fa] pb-20 font-cairo">
      <div className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4">
          <Skeleton className="w-64 h-4" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <Skeleton className="w-3/4 h-10 mb-6" />
            <Skeleton className="w-full aspect-video rounded-2xl mb-6" />
            <Skeleton className="w-full h-20 rounded-xl mb-8" />
            <div className="space-y-10">
              {[1, 2].map(i => (
                <div key={i} className="bg-white rounded-2xl h-80 border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="p-8">
                      <Skeleton className="w-1/2 h-8 mb-4" />
                      <Skeleton className="w-full h-4 mb-2" />
                      <Skeleton className="w-full h-4 mb-2" />
                      <Skeleton className="w-2/3 h-4" />
                    </div>
                    <Skeleton className="h-full w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl h-96">
                <Skeleton className="w-1/2 h-8 mb-4" />
                <Skeleton className="w-full h-4 mb-10" />
                <div className="space-y-6">
                    <Skeleton className="w-full h-14 rounded-xl" />
                    <Skeleton className="w-full h-14 rounded-xl" />
                    <Skeleton className="w-full h-14 rounded-xl" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DestinationDetailSkeleton = () => {
  return (
    <div className="bg-white font-cairo">
      <Skeleton className="h-[50vh] w-full" />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <Skeleton className="w-1/3 h-10 mb-8" />
            <Skeleton className="w-full h-4 mb-2" />
            <Skeleton className="w-full h-4 mb-2" />
            <Skeleton className="w-full h-4 mb-12" />
            <div className="space-y-16">
              {[1, 2].map(i => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Skeleton className="h-72 w-full rounded-[2.5rem]" />
                  <div>
                    <Skeleton className="w-3/4 h-8 mb-4" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-1/2 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <Skeleton className="w-full h-64 rounded-[2rem] mb-8" />
            <Skeleton className="w-full h-48 rounded-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
