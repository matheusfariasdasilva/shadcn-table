import { type Task } from "@/db/schema";

interface ExpandedRowProps {
    task: any; // Usando 'any' temporariamente para evitar erros de tipagem
}

export function ExpandedRow({ task }: ExpandedRowProps) {
    return (
        <div className="px-4 py-2 bg-muted/50 w-full">
            <div className="grid grid-cols-6 gap-4">
                <div>
                    <h4 className="font-medium">Detalhes</h4>
                    <p>Fruta: Maça</p>
                </div>
                <div>
                    <h4 className="font-medium">Anhanguera</h4>
                    <p>6.000.000</p>
                </div>
                <div>
                    <h4 className="font-medium">Jales</h4>
                    <p>3.000.000</p>
                </div>
                <div>
                    <h4 className="font-medium">Ceasa</h4>
                    <p>2.000.000</p>
                </div>
                <div>
                    <h4 className="font-medium">Bauru</h4>
                    <p>0,00</p>
                </div>
                <div>
                    <h4 className="font-medium">Mauá</h4>
                    <p>8.000.000</p>
                </div>
            </div>
        </div>
    );
} 