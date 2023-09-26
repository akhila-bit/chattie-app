// import { Alert, Button, Modal } from 'rsuite';
// import { useModalState } from '../../misc/custom-hooks';
// import { useState } from 'react';
// // import AvatarEditor from 'react-avatar-editor';

// import { profile } from 'console';
// import { PofileAvata } from './PofileAvata';

// import { Alert } from "rsuite";
// import { database } from "../../misc/firebase";

// // const fileTypes = '.png,.jpeg,.jpg';
// // const acceptedfiletypes = ['image/png', 'image/jpeg', 'image/jpg'];
// // const [img, setImg] = useState(null);
// const [isLoding, setisLoding] = useState(true);
// const { profile } = useProfile();

// // const isValidFile = files => acceptedfiletypes.includes(files.type);
// const getcanvas = canvas => {
//   return new Promise((resolve, reject) => {
//     canvas.toBlob(blob => {
//       if (blob) resolve(blob);
//       else reject(new Error('file pocess e'));
//     });
//   });
// };
// const onUploadclik=async ()=>{
//     setisloding(t)

// canvas=avtEdito.current.getImgSCaledToCanvas()
// try{
//     // canvas.toBlob()

//    const blob=await getcanvas(canvas)
// }
// const fileavref=Storage.ref(`profiles/${profile.uid}`).child('avata')
// cont uploadavaesult=await avafileref.put(blob,{
//     'cachecontol':      `public ,max-age=${3600*24*3}`

// });
// const downloadul=await uploadavaesult.ref.getDownloadUL()
// const useAvataref=database.ef(`profiles/${profile.uid}`).child('avata')
// useAvataref.set(downloadul)
// setisloding(f)
// Alert.info('uploaded',4000)
// catch(e){
//     setisloding(f)

// }
// // }
// // const AvatUploadBtn = () => {
// //   const { isOpen, open, close } = useModalState();
// // const avtedit=useref()
// //   const onFileChange = ev => {
// //     const cufiles = ev.target.files;
// //     if (cufiles.length === 1) {
// //       const file = cufiles[0];
// //       if (isValidFile(file)) {
// //         setImg(file);
// //         open();
// //       } else {
// //         Alert.warning(`wrong filetype ${file.type}`, 4000);
// //       }
// //     }
// //   };
// //   return (
// //     <div className="mt-3 text-center ">
{
  /* <PofileAvata
  src={profile.avata}
  name={profile.name}
  className="width=200 height=200 img-fillsize font-huge"
/>; */
}

/* <div> */

// //         <label
// //           htmlFor="avatar-upload"
// //           className="d-block cursor-pointed padded"
// //         >
// //           select new avata
// //           <input
// //             id="avat-upload"
// //             type="file"
// //             className="d-none"
// //             accept={fileTypes}
// //             onChange={onFileChange}
// //           />
// //         </label>

// //         <Modal show={isOpen} hide={close}>
// //           <Modal.Header></Modal.Header>
// //           <Modal.Title>Adjust and upload new Ava </Modal.Title>
// //           <Modal.Body>
// //             {/* {img && (
// //               <AvatarEditor
// // ref={avtEditocref}
// //                 img={img}
// //                 width={200}
// //                 height={200}
// //                 border={10}
// //                 color={[255, 255, 255, 0.6]}
// //                 borderRadius={100}
// //                 rotate={0}
// //               />
// //             )} */}
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button appearance="ghost" onclick={onUploadClick} disabled={isloading}>Upload new Ava</Button>
// //           </Modal.Footer>
// //         </Modal>
// //       </div>
// //     </div>
// //   );
// // };
// // export default AvatUploadBtn;
