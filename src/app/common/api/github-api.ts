import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StringUtils } from '../utils/strings-utils';

@Injectable()
export class GitHubApi {
    constructor(private httpClient: HttpClient) {}

    public async getLatestReleaseAsync(owner: string, repo: string, includePrereleases: boolean): Promise<string> {
        const url: string = `https://api.github.com/repos/${owner}/${repo}/releases`;
        const releasesResponse: any = await this.httpClient.get<any>(url).toPromise();

        let latestRelease: any = releasesResponse.find((x) => x.prerelease);

        if (includePrereleases) {
            latestRelease = releasesResponse.find((x) => x.prerelease);
        } else {
            latestRelease = releasesResponse.find((x) => !x.prerelease);
        }

        if (latestRelease != undefined && latestRelease.tag_name != undefined) {
            return StringUtils.replaceFirst(latestRelease.tag_name, 'v', '');
        }

        return '';
    }
}
