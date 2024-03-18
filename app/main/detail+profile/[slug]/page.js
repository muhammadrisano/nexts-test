import CardProfile from "@/component/module/cardProfile/cardProfile";
import WorkerProfile from "@/component/module/workerProfile/workerProfile";
import { getWorkersById } from "@/service/worker";
import React from "react";

const DetailProfile = async ({ params }) => {
  const slug = params.slug
  console.log(slug)
  const profileData = await getWorkersById(slug);
  return (
    <div style={{ marginTop: "60px", position: "relative" }}>
      <div style={{ background: "#5E50A1", height: "300px", width: "100%", position: "absolute", top: "0", zIndex: "-1" }}></div>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 d-flex justify-content-center ">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center">
            {profileData && (
              <CardProfile
                child="Hire"
                name={profileData.name}
                src={profileData.photo}
                job={profileData.job_desk || "-"}
                address={profileData.domicile || "-"}
                workPlace={profileData.workplace || "-"}
                description={profileData.description || "-"}
              />
            )}
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8  pt-4 px-4" style={{ borderRadius: "10px", background: "white" }}>
            <WorkerProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
export async function getStaticPaths() {
  const paths = await getAllWorkerIds(); // Mengambil semua slug yang mungkin
  return {
    paths,
    fallback: false // Ubah menjadi true jika ingin memberikan 404 jika slug tidak ditemukan
  };
}

// // Mengimplementasikan getStaticProps
// export async function getStaticProps({ params }) {
//   const slug = params.slug;
//   const profileData = await getWorkersById(slug); // Mengambil data profil berdasarkan slug
//   return {
//     props: {
//       profileData
//     }
//   };
// }