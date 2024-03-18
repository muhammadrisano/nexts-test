import CardProfile from "@/component/module/cardProfile/cardProfile";
import WorkerProfile from "@/component/module/workerProfile/workerProfile";
import { getProfile, getWorkersSkills } from "@/service/worker";

const WorkersProfile = async () => {
  const profileData = await getProfile();
  const skillsData = await getWorkersSkills();
  return (
    <div style={{ marginTop: "60px", position: "relative" }}>
      <div style={{ background: "#5E50A1", height: "300px", width: "100%", position: "absolute", top: "0", zIndex: "-1" }}></div>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 d-flex justify-content-center ">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center">
            {profileData && (
              <CardProfile
                child="Edit"
                href="/main/profile/edit"
                name={profileData.name}
                src={profileData.photo}
                job={profileData.job_desk || "-"}
                address={profileData.domicile || "-"}
                workPlace={profileData.workplace || "-"}
                description={profileData.description || "-"}
              >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {skillsData.map((item) => (
                    <div key={item.id} className=" text-center bg-warning me-2 py-2 px-3 mb-2" style={{ color: "white", display: "flex", flexWrap: "wrap" }}>
                      {item.skill_name}
                    </div>
                  ))}
                </div>
              </CardProfile>
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

export default WorkersProfile;
