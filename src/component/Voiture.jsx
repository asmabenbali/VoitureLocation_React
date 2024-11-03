import React from 'react';

export default function Voiture({ voiture, supprimer }) {
    return (
        <tr>
            <td>{voiture.id}</td>
            <td>{voiture.marque}</td>
            <td>{voiture.type}</td>
            <td>{voiture.prix}{' Dh'} </td>
            <td>
                {voiture.image && <img src={voiture.image} alt="preview" width="50" />}
            </td>
            <td>
                <button onClick={supprimer} className="btn btn-danger btn-sm">
                    Supprimer
                </button>
            </td>
        </tr>
    );
}
