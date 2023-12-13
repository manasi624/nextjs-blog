


export default function LoadingCard(){
    return (
      <div
        className="flex h-[300px] w-[400px] flex-col rounded-lg shadow-lg overflow-hidden animate-pulse"
      >
        <div className="flex-1 bg-red-100 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="block mt-2 bg-gray-300 h-4 "></div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0 bg-gray-300 h-8 w-8"></div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 bg-gray-300 h-4 "></p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <div className="bg-gray-300 h-3 w-6 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}