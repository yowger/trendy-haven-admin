// "use client"

// import { useCallback, useState } from "react"
// import { useDropzone } from "react-dropzone"
// import { ImagePlus } from "lucide-react"

// const DropZoneComponent = () => {
//     const [files, setFiles] = useState([])

//     const onDrop = useCallback((acceptedFiles: any) => {
//         setFiles(
//             acceptedFiles.map((file: any) =>
//                 Object.assign(file, { preview: URL.createObjectURL(file) })
//             )
//         )
//     }, [])

//     const { getRootProps, getInputProps } = useDropzone({ onDrop })

//     const fileList = files.map((file: any) => (
//         <li key={file.name}>
//             <img src={file.preview} alt={file.name} />
//             <span>{file.name}</span>
//         </li>
//     ))

//     return (
//         <>
//             <div className="flex items-center justify-center w-full">
//                 <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
//                     <div
//                         {...getRootProps()}
//                         className="flex flex-col items-center justify-center pt-5 pb-6"
//                     >
//                         <input {...getInputProps()} />
//                         <ImagePlus
//                             className="w-8 h-8 mb-4 text-gray-500"
//                             aria-hidden="true"
//                         />
//                         <p className="mb-2 text-sm text-gray-500">
//                             <span className="font-semibold">
//                                 Click to upload
//                             </span>{" "}
//                             or drag and drop
//                         </p>
//                     </div>
//                 </label>
//             </div>
//             <ul>{fileList}</ul>
//         </>
//     )
// }

// export default function Test() {
//     return (
//         <div>
//             Test
//             <DropZoneComponent />
//         </div>
//     )
// }
