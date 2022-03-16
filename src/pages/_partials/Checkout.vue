<template>
  <div>
    <div class=" text-light" style="margin: 5px">
      Preço Total: <b>R$ {{ totalCart }}</b>
    </div>
    <a href="" class="btn btn-success" @click.prevent="openModalCheckout">Finalizar</a>

    <modal name="checkout">
      <div class="px-md-5 my-4">
        <div class="col-12" v-if="me.name !== ''">
          <p><strong>Total de produtos:</strong> {{ products.length }}</p>
          <p><strong>Preço total:</strong> R$ {{ totalCart }}</p>
          <div class="form-group">
            <textarea name="comment" class="form-control" cols="30" rows="2" placeholder="Comentário"></textarea>
          </div>
          <button class="btn btn-success btn-full">Fazer Pedido</button>
        </div>
        <div v-else class="row">
          <div class="col-6">
            <p><strong>Total de produtos:</strong> {{ products.length }}</p>
            <p><strong>Preço total:</strong> R$ {{ totalCart }}</p>
            <div class="form-group">
              <textarea name="comment" class="form-control" cols="30" rows="2" placeholder="Comentário"></textarea>
            </div>
            <button class="btn btn-info btn-full">Fazer Pedido de Forma Anônima</button>
          </div>
          <div class="col-6">
            <router-link :to="{name: 'login'}" class="btn btn-light btn-full">
              Fazer Login
            </router-link>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      products: state => state.cart.products,
      me: state => state.auth.me
    }),

    totalCart () {
      let total = 0

      this.products.map((itemCart, index) =>{
        total += itemCart.qty * itemCart.product.price
      })

      return total
    }
  },

  methods: {
    openModalCheckout() {
      this.$modal.show('checkout')
    },

    closeModalCheckout() {
      this.$modal.hide('checkout')
    },
  },
}
</script>