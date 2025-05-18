import React from "react";
import Subtitle from "../../components/TeachersComp/Subtitle/Subtitle";
import Teachers from "../../components/TeachersComp/Teachers/Teachers";

function TeachersPage() {
  return (
    <>
      <div className="container">
        <Subtitle
          title="Science"
          icon={<i className="fa-solid fa-flask"></i>}
        />

      <Teachers />

        <Subtitle
          title="Math"
          icon={<i className="fa-solid fa-plus-minus"></i>}
        />
        <Teachers />
        <Subtitle
          title="English"
          icon={<i className="fa-solid fa-plus-minus"></i>}
        />
                <Teachers />

        <Subtitle
          title="History"
          icon={<i className="fa-solid fa-plus-minus"></i>}
        />
                <Teachers />

      </div>
    </>
  );
}

export default TeachersPage;
