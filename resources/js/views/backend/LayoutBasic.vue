<template>
    <!-- Page Wrapper -->
    <div id="wrapper">
        <!-- Sidebar -->
        <site-side-bar />
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <!-- Topbar -->
                <site-nav-bar />
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <router-view></router-view>
                <!-- /.container-fluid -->
            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <site-footer />
            <!-- End of Footer -->
        </div>
        <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
</template>

<script>
import SiteSideBar from "./layouts/SiteSideBar.vue";
import SiteNavBar from "./layouts/SiteNavBar.vue";
import SiteFooter from "./layouts/SiteFooter.vue";
export default {
    components: {
        SiteSideBar,
        SiteNavBar,
        SiteFooter,
    },
};
</script>
