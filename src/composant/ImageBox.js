import Image from 'next/image';

const ImageBox = () => {
  return (
    


    <div className="flex justify-center items-center p-10 ">
    <div className="flex border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col space-y-4 p-4">
        <Image src="/images/nexts.png" alt="Image 1" width={150} height={150} />
        <Image src="/images/nodes.jpeg" alt="Image 2" width={100} height={100} />
      </div>
      <div className="border-l-2 border-gray-300 h-full"></div>
      <div className="flex flex-col space-y-4 p-4">
        <Image src="/images/js.png" alt="Image 3" width={150} height={150} />
        <Image src="/images/téléchargement.png" alt="Image 4" width={150} height={150} />
      </div>
    </div>
  </div>
    
  );
};

export default ImageBox;
