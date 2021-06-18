import React, { useEffect, useState } from "react";
import { Dialog } from "@material-ui/core";
import axios from "axios";

function ListReactions(props, { id }) {
  const { openPopup, setopenPopup } = props;
  const [reactions, setreactions] = useState({});
  console.log("voilaaa: " + id);
  useEffect(() => {
    /* axios
      .get("http://localhost:5000/pi/reactRoute/react/" + id)
      .then((res) => setreactions(res.data.result));*/
  }, [id]);
  return (
    <Dialog open={openPopup}>
      <div
        class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical rounded-lg p-0 lg:w-5/12 relative shadow-2xl uk-animation-slide-bottom-small"
        style={{ width: "1024px" }}
      >
        <div class="text-center py-4 border-b">
          <h3 class="text-lg font-semibold"> Reactions List </h3>
          <button
            class="uk-modal-close-default bg-gray-100 rounded-full p-2.5 m-1 right-2"
            type="button"
            uk-close
            uk-tooltip="title: Close ; pos: bottom ;offset:7"
            onClick={() => setopenPopup(false)}
          ></button>
        </div>
        <div class="flex flex-1 items-start space-x-4 p-5">
          <table>
            <th>username</th>
            <th>react type</th>
            {/*reactions?.map((reaction) => {
              return (
                <tr>
                  <td> {reaction.username} </td>
                  <td>
                    <img src={"assets/user/images/post/" + reaction.image} alt={reaction.name} />
                  </td>
                </tr>
              );
            })*/}
            <tr></tr>
          </table>
        </div>
      </div>
    </Dialog>
  );
}

export default ListReactions;
