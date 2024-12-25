import partyFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

const Party = () => {
  const { id } = useParams();

  const [party, setParty] = useState(null);

  //  Load party
  useEffect(() => {
    const loadParty = async () => {
      const res = await partyFetch.get(`/parties/${id}`);

      console.log(res.data);

      setParty(res.data);
    };
    loadParty();
  });

  return (
    <div>
      <h1>Party</h1>
    </div>
  );
};

export default Party;
