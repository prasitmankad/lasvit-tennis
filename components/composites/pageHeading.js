export default function pageHeading(props) {
  //console.log("pageHeading Props // ", props);

  return (
    <React.Fragment>
      <div className={"bg-"+props.sectionData.backgroundColor.title}>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
          <div className="max-w-xl">
            <h2 className={"text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-4xl "+ props.globalData.branding.primaryAccentColor.title}>
              {props.sectionData.heading}
            </h2>
            <p className="mt-5 text-xl text-gray-500">
              {props.sectionData.content}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
