<script setup>
import { reactive, ref, onMounted, computed, onUpdated} from 'vue'

const categorys = reactive([]);
const types = reactive([]);

const formCreatePQR = reactive({
  client: "",
  category: "",
  type:"",
  description: "",
}); 



const state = reactive ({
    customers: [],
    // filterCustomers: computed(()=> searchCustomers())
})



// const searchCustomers = () => {
//   // return state.customers.filter((customer) => customer.names.includes(state.names.toLowerCase()))
//   // let search = state.customers.value.map(customer => customer)
//   let search = customers.map((customer) => customer.names)
//   const arr = Array.isArray(customers)
//   console.log("es un array:",arr)
//   console.log("search...🔎",search)
//    return search 
// }
// searchCustomers()


let  customers = reactive([
    {
        "id": 1,
        "names": "Jhon",
        "document": "2363213258",
        "email": "jhondoe@correo.com",
        "surnames": "Doe",
        "fullName": "Jhon Doe",
        "dateOfBirth": "1998-10-24",
        "age": "24",
        "address": "214 street Pontifician Av.",
        "phone": "3195861268",
        "createdAt": "2022-11-17T13:36:16.000Z",
        "updatedAt": "2022-11-17T13:36:16.000Z"
    },
    {
        "id": 2,
        "names": "Dev",
        "document": "458349590",
        "email": "envioshseq@gmail.com",
        "surnames": "Torvald",
        "fullName": "Dev Torvald",
        "dateOfBirth": "2001-10-17",
        "age": "21",
        "address": "356 street 5 Av.",
        "phone": "75060337",
        "createdAt": "2022-11-17T14:42:46.000Z",
        "updatedAt": "2022-11-17T14:42:46.000Z"
    }
]);
// const getCustomer = async() => {
//   const urlBD = "https://pqr-production.up.railway.app/api/v1/customer"
//   try {
//     const res = await fetch(urlBD)
//     const data  = await res.json()
//     customers = data
//     console.log("state.customers...",customers) 
//   }catch(error){
//     console.log(error)
//   }
// }

// onMounted(() => {
//   console.log("state.customers...🎄",customers)

//   getCustomer();
// })

const searchCustomerss = () => {
  // let res = [];
  //  for( let i in customers ){
  //    res.push(customers[i].names)
  //  }
  //  return res
}
//  console.log(Array.isArray(customers))
// console.log(customers)





</script>
<template>
    <form class="container my-5" @submit.prevent="submitForm()">
        <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Cliente</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Nombre del cliente"  v-model="formCreatePQR.client">
        </div>
        <!-- {{state.filterCustomers}} -->
        <!-- {{customers.value}}
        <div v-for="customer in customers.value" :key="customer.id"> -->
      <div>
        <!-- <div>{{customer.names }}</div>
        <div>
          {{ customer.document }} | {{ customer.email }} Kg |
          {{ customer.fullName }} pack
        </div>
      </div> -->
    </div>
    </form>
</template>