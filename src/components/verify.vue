<template>
    <div></div>
</template>

<script>
    export default {
        name: 'verify',
        async created() {
            const URL = "http://localhost:3000/account/token"
            const token = localStorage.getItem('x-access-token')

            if (!token) {
                location.href = 'http://localhost:8080/login'
            }

            const request = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({
                    token
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async(res) => {
                const response = await res.json()

                if (response.result) {
                    this.$store.commit('SET_DATA', response.data)
                } else {
                    localStorage.removeItem('x-access-token')
                    location.href = 'http://localhost:8080/login'
                }
            })
        }
    }
</script>