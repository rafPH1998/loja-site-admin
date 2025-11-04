<template>
    <div class="p-6 bg-card rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-foreground mb-6">Gestão de Produtos</h1>
      <p class="text-muted-foreground mb-8">
        Aqui você pode visualizar, adicionar, editar e remover produtos da sua loja.
      </p>
  
      <div class="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Buscar produtos..."
          class="w-1/3"
        />
        <Button
          class="flex items-center"
        >
          <Plus class="w-5 h-5 mr-2" />
          Adicionar Novo Produto
        </Button>
      </div>
  
      <!-- Tabela de Produtos (Placeholder) -->
      <div class="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Estoque</TableHead>
              <TableHead class="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="i in 5" :key="i">
              <TableCell class="font-medium">
                Produto Exemplo {{ i }}
              </TableCell>
              <TableCell>
                R$ {{ (49.90 * i).toFixed(2) }}
              </TableCell>
              <TableCell>
                {{ 100 - (i * 10) }}
              </TableCell>
              <TableCell class="text-right">
                <Button variant="ghost" size="icon" class="h-8 w-8 mr-1">
                  <Edit class="w-4 h-4" />
                </Button>
                <Button variant="destructive" size="icon" class="h-8 w-8">
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
  import { Plus, Edit, Trash2 } from 'lucide-vue-next';

import Button from './ui/button/Button.vue';
import TableHeader from './ui/table/TableHeader.vue';
import TableRow from './ui/table/TableRow.vue';
import TableHead from './ui/table/TableHead.vue';
import TableBody from './ui/table/TableBody.vue';
import TableCell from './ui/table/TableCell.vue';
import Table from './ui/table/Table.vue';
  </script>
  