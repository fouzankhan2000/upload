import { useState } from 'react';
import './App.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

function App() {

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  return (
    <main>
      <form 
      onClick={() => document.querySelector(".input-field").click()}
      >
        <input type='file' accept='.csv' className='input-field' hidden 
          onChange={({ target: {files}}) => {
            files[0] && setFileName(files[0].name)
          }}
        />

        {image ?
        <img src={image} width={150} height={150} alt={fileName} />
        :
        <>
        <MdCloudUpload color='#1475cf' size={60} />
        <p>Select a CSV file to upload</p>
        </>}
      </form>

      <section className='uploaded-row'>
        <AiFillFileImage color='#1475cf' />
        <span className='upload-content'>
          {fileName} -
          <MdDelete 
            onClick={() => {
              setFileName("No selected File")
              setImage(null)
            }}
          />
        </span>
      </section>
    </main>
  );
}

export default App;
