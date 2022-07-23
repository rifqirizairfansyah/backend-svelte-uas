<script>
  import { authenticated } from "../stores/auth";
  import { goto } from "@sapper/app.mjs";

  let auth = "";

  authenticated.subscribe((a) => (auth = a));

  const logout = async () => {
    authenticated.subscribe(async (value) => {
      if (value) {
        await fetch(
          "http://localhost:4000/api/manajemen_organisasi/sessions/logout",
          {
            method: "DELETE",
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
              authenticated.set("");
              auth = "";
              await goto("/login");
            }
          })
          .catch((error) => {
            console.error(error);
            auth = "";
          });
      }
    });
  };
</script>

{#if auth != ""}
  <header class="header" id="header">
    <div class="header_toggle"><i class="bx bx-menu" id="header-toggle" /></div>
    <div class="header_img">
      <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
    </div>
  </header>
  <div class="l-navbar" id="nav-bar">
    <nav class="nav">
      <div>
        <a href="/" class="nav_logo">
          <i class="bx bx-layer nav_logo-icon" />
          <span class="nav_logo-name">UAS</span>
        </a>
        <div class="nav_list">
          <a href="/" class="nav_link active">
            <i class="bx bx-grid-alt nav_icon" />
            <span class="nav_name">Dashboard</span>
          </a>
          <a href="/Suborganisasi" class="nav_link">
            <i class="bx bx-user nav_icon" />
            <span class="nav_name">Sub Organisasi</span>
          </a>
          <a href="/anggota" class="nav_link">
            <i class="bx bx-user nav_icon" />
            <span class="nav_name">Anggota</span>
          </a>
          <a href="/activity" class="nav_link">
            <i class="bx bx-bookmark nav_icon" />
            <span class="nav_name">Activity</span>
          </a>
        </div>
      </div>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="nav_link" on:click={logout}>
        <i class="bx bx-log-out nav_icon" />
        <span class="nav_name">SignOut</span>
      </a>
    </nav>
  </div>
{/if}
