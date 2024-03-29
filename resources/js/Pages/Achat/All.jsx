import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/Table';






const columns=[
    'fournisseur_id',
    'numero_bon_de_commande',
    'conditions_de_paiement',
    'delai_livraison_prevu',
    'mode_livraison',
    'date_reception',
    'numero_de_suivi',
    'commentaires',
    'statut'
]
export default function All({ auth, achats}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Achats</h2>}
        >
            <Head title="Achats" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Table items={achats} columns={columns} primary={"ID_Achats"} action="achats.edit" ></Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}