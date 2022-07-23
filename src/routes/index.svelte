<script>
  import { onMount } from "svelte";
  import { authenticated } from "../stores/auth";

  let id = "",
    first_name = "",
    last_name = "",
    email = "",
    token = "";

  onMount(async () => {
    try {
      authenticated.subscribe(async (value) => {
        if (value) {
          await fetch(
            "http://localhost:4000/api/online-course/sessions/current-user",
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `${value}`,
              },
            }
          )
            .then((response) => response.json())
            .then(async (responseJson) => {
              if (responseJson.metadata.http_code == "200") {
                id = responseJson.data.id;
                first_name = responseJson.data.first_name;
                last_name = responseJson.data.last_name;
                email = responseJson.data.email;
                token = value;
              }
            })
            .catch((error) => {
              console.error(error);
              token = "";
            });
        } else {
          window.location.href = "/login";
        }
      });
    } catch (e) {
      authenticated.set("");
      token = "";
      window.location.href = "/login";
    }
  });
</script>

<div>dashboard</div>
