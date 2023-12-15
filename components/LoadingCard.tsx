


export default function LoadingCard(){
    return (
      <div className="text-black dark:text-white flex h-[300px] w-[400px] flex-col rounded-lg shadow-lg overflow-hidden animate-pulse">
        <div className="flex-1 bg-light_bg_skin dark:bg-dark_bg_skin p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="block mt-2 bg-light_tag_sky dark:bg-dark_bg_sky h-4 "></div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0 bg-light_tag_sky dark:bg-dark_bg_sky h-8 w-8"></div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 bg-light_bg_gray h-4 "></p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <div className="bg-light_bg_gray dark:bg-dark_bg_gray h-3 w-6 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}