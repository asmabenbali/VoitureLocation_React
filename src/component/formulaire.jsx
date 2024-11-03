import { useState } from "react";
import "./style.css";
import Voiture from "./Voiture";

export default function Formulaire() {
    const [id, setId] = useState("");
    const [marque, setMarque] = useState("");
    const [type, setType] = useState("");
    const [prix, setPrix] = useState("");
    const [image, setImage] = useState("");

    const [voitures, setVoitures] = useState([
        {
            id: "v1",
            marque: "Bmw L2",
            type: "Diesel",
            prix: 20000,
            image: "bmw.png",
        },
        {
            id: "v2",
            marque: "Audi",
            type: "Essence",
            prix: 450000,
            image: "audi.png",
        },
    ]);

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const Ajouter = () => {
        if (!id || !marque || !type || !prix || !image) {
            alert("Veuillez remplir tous les champs avant d'ajouter une voiture.");
            return;
        }

        const newRow = { id, marque, type, prix, image };
        setVoitures([...voitures, newRow]);

        setId("");
        setMarque("");
        setType("");
        setPrix("");
        setImage("");
    };

    const supprimer = (index) => {
        const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cette voiture ?");
        if (confirmDelete) {
            setVoitures(voitures.filter((_, i) => i !== index));
        }
    };

    return ( 
        <div className="container mt-4">
<h3 className="titre">GESTION DES VOITURE DE LOCATION</h3>
<form className="mb-4">
                <div className="mb-3 d-flex align-items-center">
                    <label className="form-label me-2" style={{ width: "100px" }}>ID</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="form-control"
                        placeholder="Entrez l'ID"
                        required
                    />
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <label className="form-label me-2" style={{ width: "100px" }}>Marque</label>
                    <input
                        type="text"
                        value={marque}
                        onChange={(e) => setMarque(e.target.value)}
                        className="form-control"
                        placeholder="Entrez la marque"
                        required
                    />
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <label className="form-label me-2" style={{ width: "100px" }}>Type </label>
                    <input
                        type="text" 
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="form-control"
                        placeholder="Entrez le type de carburant"
                        required
                    />
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <label className="form-label me-2" style={{ width: "100px" }}>Prix </label>
                    <input
                        type="number"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)}
                        className="form-control"
                        placeholder="Entrez le prix"
                        required
                    />
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <label className="form-label me-2" style={{ width: "100px" }}>Image</label>
                    <input
                        type="file"
                        onChange={handleImage}
                        className="form-control"
                        required
                    />
                </div>
                <button type="button" onClick={Ajouter} className="btn btn-primary w-100">
                    Ajouter
                </button>
            </form>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Marque</th>
                        <th>Type</th>
                        <th>Prix</th>
                        <th>Image</th>
                        <th>Opération</th>
                    </tr> 
                </thead>
                <tbody>
                    {voitures.map((item, index) => (
                        <Voiture
                            key={index}
                            voiture={item}
                            supprimer={() => supprimer(index)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
