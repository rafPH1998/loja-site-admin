<template>
    <div class="p-6 bg-card rounded-lg shadow-md">
        <h1 class="text-3xl font-bold text-foreground mb-6">Gestão de Usuários</h1>
        <p class="text-muted-foreground mb-8">
            Gerencie os usuários cadastrados na plataforma, suas permissões e informações de contato.
        </p>

        <div class="flex justify-between items-center mb-4">
            <Input type="text" placeholder="Buscar usuários..." class="w-1/3" />
            <Button class="flex items-center">
                <UserPlus class="w-5 h-5 mr-2" />
                Adicionar Novo Usuário
            </Button>
        </div>

        <!-- Tabela de Usuários (Placeholder) -->
        <div class="border rounded-lg">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead class="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="i in 5" :key="i">
                        <TableCell class="font-medium">
                            Usuário Teste {{ i }}
                        </TableCell>
                        <TableCell>
                            usuario{{ i }}@exemplo.com
                        </TableCell>
                        <TableCell>
                            <span :class="[
                                i % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800',
                                'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
                            ]">
                                {{ i % 2 === 0 ? 'Ativo' : 'Pendente' }}
                            </span>
                        </TableCell>
                        <TableCell class="text-right">
                            <Button variant="ghost" size="icon" class="h-8 w-8 mr-1">
                                <Edit class="w-4 h-4" />
                            </Button>
                            <Button variant="destructive" size="icon" class="h-8 w-8" @click="deleteUser(1)">
                                <Trash2 class="w-4 h-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UserPlus, Edit, Trash2 } from 'lucide-vue-next';
import Button from './ui/button/Button.vue';
import TableHeader from './ui/table/TableHeader.vue';
import TableRow from './ui/table/TableRow.vue';
import TableHead from './ui/table/TableHead.vue';
import TableBody from './ui/table/TableBody.vue';
import TableCell from './ui/table/TableCell.vue';
import Table from './ui/table/Table.vue';

const deleteUser = (id: number) => {
    alert("DELETEAR USUARIO: " + id)
}
</script>