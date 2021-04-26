import "../style/addPage.css";
import { useParams } from "react-router";
import UploadForm from "../components/UploadForm";
import { chooseType } from "../utils/schemas";
import { useEffect, useState } from "react";
const AddPage = ({ icons }) => {
  const objectType = useParams().collectionType;
  const [logoIconName, setLogoIconName] = useState(null);

  useEffect(() => {
    const loader = async () => {
      objectType && setLogoIconName(`${chooseType(objectType)}Icon`);
    };
    loader();
  }, [objectType]);
  return (
    objectType &&
    logoIconName && (
      <div className="addPage">
        <img
          alt={objectType}
          src={(() => {
            return icons[logoIconName];
          })()}
        />
        <UploadForm objectType={objectType} />
      </div>
    )
  );
};
export default AddPage;
