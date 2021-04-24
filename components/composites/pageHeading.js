export default function pageHeading(props) {
  //console.log("pageHeading Props // ", props);

  return (
    <React.Fragment>
      <div className={"bg-"+props.sectionData.backgroundColor.title}>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
          <div className="max-w-xl">
            <h2 className={"prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_title text-"+ props.globalData.branding.primaryAccentColor.title}>
              {props.sectionData.heading}
            </h2>
            <p className="custom_p text-gray-500">
              {props.sectionData.content}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
