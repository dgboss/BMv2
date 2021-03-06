import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { BikeMaps2 } from "./app.component";
import { MapPage } from "../map/map";
import { WelcomeModal } from "../pages/welcomeModal/welcomeModal";
import { LegendPage } from "../legend/legend";
import { ListPage } from "../pages/list/list";
import { PopoverPage } from "../pages/popover/popover";
import { HazardPage } from "../pages/hazard/hazard";
import { IconService } from "../services/IconService";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { Vibration } from "@ionic-native/vibration";
import { DataService } from "../services/DataService";
import { PopupService } from "../services/PopupService";
import { BirthMonthService } from "../services/BirthMonthService";
import { BirthYearService } from "../services/BirthYearService";
import { GenderService } from "../services/GenderService";
import { CyclingFrequencyService } from "../services/CyclingFrequencyService";
import { BasicSelect } from "../components/basic_select/basic_select";
import { BasicSelectItems } from "../components/basic_select_items/basic_select_items";
import { HazardFormService } from "../services/Form_Services/HazardFormService";
import { GroupSelect } from "../components/group_select/group_select";
import { GroupSelectItems } from "../components/group_select_items/group_select_items";
import { PersonalDetailsService } from "../services/Form_Services/PersonDetailsService";
import { CoordService } from "../services/CoordService";
import { TermsAndConditionsModal } from "../pages/termsAndConditionsModal/termsAndConditionsModal";
import { AboutPage } from "../pages/about/about";
import { SettingsPage } from "../pages/settings/settings";
import { AuthService } from "../services/AuthService";
import { LoginModal } from "../pages/login/login";
import { RegisterModal } from "../pages/register/register";
import { PasswordResetModal } from "../pages/password_reset/password_reset";
import { AlertAreaService } from "../services/AlertAreaService";
import { YesNoService } from "../services/YesNoService";
import { TheftFormService } from "../services/Form_Services/TheftFormService";
import { TheftPage } from "../pages/theft/theft";
import { CollisionPage } from "../pages/collision/collision";
import { NearmissPage } from "../pages/nearmiss/nearmiss";
import { NotificationsPage } from "../pages/notifications/notifications";
import { IncidentFormService } from "../services/Form_Services/IncidentFormService";
import { DateTimePickerService } from "../services/DateTimePickerService";

export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    BikeMaps2,
    ListPage,
    GroupSelect,
    GroupSelectItems,
    MapPage,
    WelcomeModal,
    PopoverPage,
    LegendPage,
    HazardPage,
    BasicSelect,
    BasicSelectItems,
    TermsAndConditionsModal,
    AboutPage,
    SettingsPage,
    LoginModal,
    RegisterModal,
    PasswordResetModal,
    TheftPage,
    CollisionPage,
    NearmissPage,
    NotificationsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(BikeMaps2),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (TranslateLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BikeMaps2,
    ListPage,
    MapPage,
    GroupSelectItems,
    WelcomeModal,
    PopoverPage,
    LegendPage,
    HazardPage,
    BasicSelectItems,
    TermsAndConditionsModal,
    AboutPage,
    SettingsPage,
    LoginModal,
    RegisterModal,
    PasswordResetModal,
    CollisionPage,
    TheftPage,
    NearmissPage,
    NotificationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Vibration,
    IconService,
    DataService,
    PopupService,
    BirthYearService,
    BirthMonthService,
    GenderService,
    CyclingFrequencyService,
    HazardFormService,
    PersonalDetailsService,
    CoordService,
    AuthService,
    AlertAreaService,
    YesNoService,
    TheftFormService,
    IncidentFormService,
    DateTimePickerService
  ]
})
export class AppModule {}
