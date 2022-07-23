<script>
  import { onMount } from "svelte";
  import { authenticated } from "../stores/auth";
  let data = [];
  let token = "";

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
                data = responseJson.data;
                token = value;
              }
            })
            .catch((error) => {
              console.error(error);
              token = "";
            });
        }
      });
    } catch (e) {
      authenticated.set("");
      token = "";
      window.location.href = "/login";
    }
  });
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item">
            <a href="/Suborganisasi">Subs Organisasi</a>
          </li>
        </ol>
      </nav>
    </div>
    <div class="col">
      <div class="text-end">
        <a href="/Input_Suborganization">
          <button type="button" class="btn btn-primary">Tambah</button>
        </a>
      </div>
    </div>
  </div>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Nama</th>
        <th scope="col">Deskripsi</th>
        <th scope="col">Alamat</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
