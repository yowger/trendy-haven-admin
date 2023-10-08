const linkClass =
    "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"

export default function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-3 flex flex-col">
            <div className="flex items-center gap-2 px-1 py-3">
  
                <span className="text-neutral-200 text-lg">OpenShop</span>
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
              
                sidebar item top
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
              
                sidebar item bottom
            </div>
        </div>
    )
}

