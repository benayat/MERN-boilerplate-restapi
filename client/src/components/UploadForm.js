import "../style/uploadForm.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { createInterface, chooseType } from "../utils/schemas";
import VButton from "../images/V-Button.png";
const UploadForm = ({ objectType }) => {
  const [schema, setSchema] = useState(null);
  useEffect(() => {
    setSchema(createInterface[`${chooseType(objectType)}Schema`]);
  }, [objectType]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let body = [];
    for (let i = 0; i < e.target.length - 1; i++) {
      body.push(e.target[i].value);
    }
    body = schema.reduce((acc, curr, index) => {
      acc[curr] = body[index];
      return acc;
    }, {});
    console.log(body);
    await axios.post(`/api/${objectType}s`, body);
  };

  return (
    <div>
      {schema && (
        <form className="form-create" onSubmit={onSubmit}>
          {schema.map((key) => {
            return (
              <label key={key}>
                {key}:
                <input type="text" />
              </label>
            );
          })}
          <button>
            <img alt="v-button" src={VButton} />
          </button>
        </form>
      )}
    </div>
  );
};
export default UploadForm;
//plan:
//determine how many input fieds:
//new plan: here is only create. all others - will be in the list page.
// plan for today: make this create *page* fast.
// in the list page, context menu with react package.
// in the context menu, add two options - delete and update, and it will be on each row, with stop propagation option.
