import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import IRestaurante from "../../../interfaces/IRestaurante";
import { useEffect, useState } from "react";
import axios from "axios";


const AdministracaoRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    useEffect(() => {
        axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
        .then(resposta => setRestaurantes(resposta.data))
    })

    return (
        <TableContainer component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Nome
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {restaurantes.map(restaurante => 
                <TableRow key={restaurante.id}>
                    <TableCell>
                        {restaurante.nome}
                    </TableCell>
                </TableRow>)}
                
            </TableBody>
        </TableContainer>
    )
}