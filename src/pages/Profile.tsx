import Container from "@/components/ui/container";

const Profile = () => {
  return (
    <>
      <div className="h-auto w-full bg-white py-7 shadow-md">
        <Container>
          <h1 className="text-[30px] font-bold">Profile</h1>
        </Container>
      </div>
      <Container>
        <h1 className="mt-12">Profile</h1>
        <p>name</p>
        <p>phone number</p>
        <p>random thing</p>
      </Container>
    </>
  );
};

export default Profile;
